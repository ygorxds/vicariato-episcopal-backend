CREATE TABLE capela (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    parocId INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    FOREIGN KEY (parocId) REFERENCES paroquia(id)
);
