-- Phase 6: MySQL Database Schema for NITP Convocation Digital Platform

-- 1. Create database

-- 2. Core Entities
CREATE TABLE IF NOT EXISTS Convocations (
    id VARCHAR(36) PRIMARY KEY,
    edition_number VARCHAR(10) NOT NULL, -- e.g., 'XIV'
    year INT UNIQUE NOT NULL,
    ceremony_date DATETIME NOT NULL,
    venue VARCHAR(255) NOT NULL,
    status ENUM('UPCOMING', 'ACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'UPCOMING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Departments (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Programmes (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    level ENUM('UG', 'PG', 'PhD') NOT NULL,
    duration_years INT NOT NULL
);

-- 3. Academic & Student Entities
CREATE TABLE IF NOT EXISTS Students (
    id VARCHAR(36) PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(50),
    department_id VARCHAR(36) NOT NULL,
    programme_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES Departments(id),
    FOREIGN KEY (programme_id) REFERENCES Programmes(id)
);

CREATE TABLE IF NOT EXISTS Degree_Recipients (
    id VARCHAR(36) PRIMARY KEY,
    student_id VARCHAR(36) NOT NULL,
    convocation_id VARCHAR(36) NOT NULL,
    cgpa DECIMAL(4,2),
    passing_year INT NOT NULL,
    UNIQUE KEY (student_id, convocation_id),
    FOREIGN KEY (student_id) REFERENCES Students(id) ON DELETE CASCADE,
    FOREIGN KEY (convocation_id) REFERENCES Convocations(id) ON DELETE CASCADE
);

-- 4. Operational Entities
CREATE TABLE IF NOT EXISTS Registrations (
    id VARCHAR(36) PRIMARY KEY,
    degree_recipient_id VARCHAR(36) UNIQUE NOT NULL,
    status ENUM('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'DRAFT',
    attending_in_person BOOLEAN NOT NULL DEFAULT FALSE,
    guest_count INT NOT NULL DEFAULT 0,
    dispatch_address TEXT,
    admin_remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (degree_recipient_id) REFERENCES Degree_Recipients(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Passes (
    id VARCHAR(36) PRIMARY KEY,
    registration_id VARCHAR(36) UNIQUE NOT NULL,
    qr_code_hash VARCHAR(255) UNIQUE NOT NULL,
    block_name VARCHAR(50),
    row_number VARCHAR(50),
    seat_number VARCHAR(50),
    is_scanned BOOLEAN NOT NULL DEFAULT FALSE,
    scanned_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (registration_id) REFERENCES Registrations(id) ON DELETE CASCADE
);

-- 5. Honors Entities
CREATE TABLE IF NOT EXISTS Awards (
    id VARCHAR(36) PRIMARY KEY,
    convocation_id VARCHAR(36) NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('GOLD_MEDAL', 'CERTIFICATE') NOT NULL,
    FOREIGN KEY (convocation_id) REFERENCES Convocations(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Award_Recipients (
    id VARCHAR(36) PRIMARY KEY,
    award_id VARCHAR(36) NOT NULL,
    student_id VARCHAR(36) NOT NULL,
    remarks TEXT,
    FOREIGN KEY (award_id) REFERENCES Awards(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES Students(id) ON DELETE CASCADE
);

-- 6. System & Security Entities
CREATE TABLE IF NOT EXISTS Users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('SUPER_ADMIN', 'REGISTRATION_ADMIN', 'CONTENT_ADMIN', 'ACADEMIC_ADMIN') NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Audit_Logs (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    action_type VARCHAR(50) NOT NULL,
    table_name VARCHAR(50) NOT NULL,
    record_id VARCHAR(36) NOT NULL,
    old_values JSON,
    new_values JSON,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
