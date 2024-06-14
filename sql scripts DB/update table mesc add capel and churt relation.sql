-- Adicionar a nova coluna paroqId
ALTER TABLE mescs
ADD COLUMN paroqId INT;

-- Adicionar a nova coluna capelId
ALTER TABLE mescs
ADD COLUMN capelId INT;

-- Adicionar a restrição de chave estrangeira na coluna paroqId
ALTER TABLE mescs
ADD CONSTRAINT fk_paroquia
FOREIGN KEY (paroqId) REFERENCES paroquia(id);

-- Adicionar a restrição de chave estrangeira na coluna capelId
ALTER TABLE mescs
ADD CONSTRAINT fk_capela
FOREIGN KEY (capelId) REFERENCES capela(id);
