INSERT INTO tbcadastro (cpf, nome, cargo, email, senha)
VALUES
('12345678112','Joao da Silva1', 'usuario', 'joao@devdotcom.com', '123');

select * from tbcadastro;
select * from tbhabilidades;
select * from tbescolaridade; 

INSERT INTO tbcadastro (cpf, nome, cargo, email, senha)
VALUES ('00000000000','Joao da Silva1', 'usuario', 'joao@devdotcom.com', '123');

INSERT INTO tbescolaridade (id_escolaridade, curso, instituicao, conclusao, situacao, id_cpf)
VALUES ('1', 'python','alura', '2012-02-12', 'concluido', '12345678111');

INSERT INTO tbescolaridade (id_escolaridade, curso, instituicao, conclusao, situacao, id_cpf)
VALUES ('2', 'python','alura', '2012-02-12', 'concluido', '12345678912');

DELETE FROM tbcadastro where cpf = '12345678111';

INSERT INTO tbhabilidades (id_habilidades, experiencia, atividades_exercidas, data_inicio, DATA_FINAL, id_cpf)
VALUES ('1', 'python','desenvolvedor', '2012-02-12', '2012-02-13', '12345678912');

INSERT INTO tbhabilidades (id_habilidades, experiencia, atividades_exercidas, data_inicio, DATA_FINAL, id_cpf)
VALUES ('2', 'python','desenvolvedor', '2012-02-12', '2012-02-13', '12345678111');

ALTER TABLE tbcadastro
   ADD COLUMN is_deleted boolean NOT NULL default 0;


CREATE VIEW my_data AS 
   SELECT * 
   FROM tbcadastro 
   WHERE  is_deleted = '0' 
   
select * from my_data