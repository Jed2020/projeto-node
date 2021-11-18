CREATE DATABASE IF NOT EXISTS devdotcom;

CREATE TABLE IF NOT EXISTS tbCADASTRO
(CPF VARCHAR(11) NOT NULL,
NOME VARCHAR(100) NOT NULL,
CARGO VARCHAR(50) NOT NULL,
EMAIL VARCHAR(50) NOT NULL,
SENHA VARCHAR(200) NOT NULL,
LIXEIRA BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (CPF))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS tbESCOLARIDADE
(ID_ESCOLARIDADE INT NOT NULL AUTO_INCREMENT,
CURSO VARCHAR(100) NOT NULL,
INSTITUICAO VARCHAR(100) NOT NULL,
CONCLUSAO DATE NULL,
SITUACAO VARCHAR(100) NOT NULL,
ID_CPF VARCHAR(11) NOT NULL,
PRIMARY KEY (ID_ESCOLARIDADE),
CONSTRAINT FK_CPF_ESCOLARIDADE
FOREIGN KEY (ID_CPF) REFERENCES tbCADASTRO (CPF))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS tbHABILIDADES
(ID INT NOT NULL AUTO_INCREMENT,
EXPERIENCIA VARCHAR(100) NOT NULL,
ATIVIDADES_EXERCIDAS VARCHAR(100) NOT NULL,	
DATA_INICIO DATE NULL,
DATA_FINAL DATE NULL,
ID_CPF VARCHAR(11) NOT NULL,
PRIMARY KEY (ID_HABILIDADES),
CONSTRAINT FK_CPF_HABILIDADES
FOREIGN KEY (ID_CPF) REFERENCES tbCADASTRO (CPF))
ENGINE = InnoDB;

CREATE VIEW minha_lixeira AS SELECT * FROM tbcadastro WHERE  lixeira = '0'



