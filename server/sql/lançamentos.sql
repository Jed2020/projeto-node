INSERT INTO tbcadastro (cpf, nome, cargo, email, senha)
VALUES
('12345678112','Joao da Silva1', 'usuario', 'joao@devdotcom.com', '123');

select * from tbcadastro;
select * from tbhabilidades;
select * from tbescolaridade; 
select * from tbcalculo;
show columns from tbcadastro;

select * from tbcadastro where cpf like ('22244455588')

INSERT INTO tbcadastro (cpf, nome, cargo, email, senha)
VALUES ('00000000000','Joao da Silva1', 'usuario', 'joao@devdotcom.com', '123');

INSERT INTO tbescolaridade (id_escolaridade, curso, instituicao, conclusao, situacao, id_cpf)
VALUES ('1', 'python','alura', '2012-02-12', 'concluido', '12345678111');

INSERT INTO tbescolaridade (id_escolaridade, curso, instituicao, conclusao, situacao, id_cpf)
VALUES ('2', 'python','alura', '2012-02-12', 'concluido', '12345678912');

DELETE FROM tbcadastro where cpf =  '99988877755';
TRUNCATE TABLE tbcadastro;

INSERT INTO tbhabilidades (id_habilidades, experiencia, atividades_exercidas, data_inicio, DATA_FINAL, id_cpf)
VALUES ('3', 'python','desenvolvedor', '2012-02-12', '2012-02-13', '22244455588');

INSERT INTO tbhabilidades (id_habilidades, experiencia, atividades_exercidas, data_inicio, DATA_FINAL, id_cpf)
VALUES ('3', 'python','desenvolvedor', '2012-02-12', '2012-02-13', '12345678111');

INSERT INTO tbcalculo (id_calculo, data, etanol, gasolina, litros, resultado)
VALUES ('1', '2002/02/02','true', 'null', '22', '');

ALTER TABLE tbcadastro
   ADD COLUMN is_deleted boolean NOT NULL default 0;

ALTER TABLE tbcalculo
   ADD COLUMN INDICE VARCHAR(300) NULL;
   
ALTER TABLE tbescolaridade RENAME COLUMN ID_ESCOLARIDADE TO ID;

ALTER TABLE tbcalculo DROP COLUMN RESULTADO;

CREATE VIEW my_data AS 
   SELECT * 
   FROM tbcadastro 
   WHERE  is_deleted = '0' 
   
select * from minha_lixeira;

alter table tbcadastro modify column senha varchar(100);
alter table tbcalculo modify column senha varchar(100);

SELECT id, curso, instituicao, conclusao, situacao, id_cpf FROM tbescolaridade 
AS T1 INNER JOIN tbcadastro ON T1.id_cpf = tbcadastro.nome;