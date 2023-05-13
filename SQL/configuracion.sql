USE u184067125_BolsaEmpleoDB;

CREATE TABLE document_type (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(30)
);

CREATE TABLE candidates (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_type BIGINT UNSIGNED,
    document_number BIGINT UNSIGNED,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    dob DATE,
    profession VARCHAR(15),
    salary BIGINT,
    email VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE job_offers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    job_description TEXT,
    company_name VARCHAR(50),
    salary BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO document_type (type_name) VALUES ('Cédula Ciudadania'), ('Cédula Extranjería'), ('Pasaporte'), ('Otros');

INSERT INTO job_offers (id, job_title, job_description, company_name, salary) VALUES (1, 'Ingeniero Industrial', 'Se requiere Ingeniero Industrial con mínimo 2 años de experiencia en Salud Ocupacional.', 'EPM', 2500000), (2, 'Profesor de Química', 'Se requiere Químico con mínimo 3 años de experiencia en docencia.', 'Institución educativa IES', 1900000), (3, 'Ingeniero de Desarrollo Junior', 'Se requiere Ingeniero de sistemas con mínimo 1 año de experiencia en Desarrollo de Software en Tecnología JAVA.', 'XRM Services', 2600000), (4, 'Coordinador de Mercadeo', 'Se necesita Coordinador de Mercadeo con estudios Tecnológicos graduado y experiencia mínima de 1 año.', 'Insercol', 1350000), (5, 'Profesor de Matemáticas', 'Se requiere Licensiado en Matemáticas o Ingeniero con mínimo 2 años de experiencia en docencia.', 'SENA', 1075000), (6, 'Mensajero', 'Se requiere mensajero con moto, con documentos al día y buenas relaciones personales.', 'SERVIENTREGA', 950000), (7, 'Cajero', 'Se requiere cajero para almacén de cadena con experiencia mínima de 1 año, debe disponer de tiempo por cambios de turnos.', 'Almacenes Éxito', 850000);




