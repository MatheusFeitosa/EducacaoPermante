import sys
import uuid

from sqlalchemy import desc
from database.session import get_session
from sqlalchemy.exc import InternalError
from database.model.Model import *
from utilities.loggers import get_logger
#Não testado a parte dos Json

class CreateTurmaService:
    def execute(self, turmaData):
        logger = get_logger(sys.argv[0])
        #Permito cadastrar 2 turmas com mesmo nome
        #Pois a mesma turma pode ser lançada em momentos diferentes
        #Isso pode gerar um problema, perguntar para secretaria

        session = get_session()
        busca = session.query(User).filter_by(Id=turmaData['responsavel']).first()
        if (busca != None):
            
            QueryTurma = session.query(Turma).filter_by(nome_do_curso=turmaData['nome_do_curso']).first()

            if QueryTurma:
                return {"Error":"Já existe uma turma com este nome."}, 400

            cadastrar = Turma(id_responsavel = busca.Id, IsConcluido = False, nome_do_curso = turmaData['nome_do_curso'] ,carga_horaria_total = turmaData['carga_horaria_total'], tolerancia = turmaData['tolerancia'], modalidade = turmaData['modalidade'])
            session.add(cadastrar)
            session.commit()
            turma = session.query(Turma).filter_by(id_responsavel=cadastrar.id_responsavel,IsConcluido=False).order_by(desc(Turma.id_turma)).first()

            link = LinkCadastramento(token=str(uuid.uuid4()),link_id_turma=turma.id_turma)
            session.add(link)
            session.commit()

#--------------------- Segunda parte -----------------------
            if (turmaData['turma_tag']):
                QueryPublicoAlvo = session.query(PublicoAlvo).filter_by(nome_publicoAlvo=turmaData['turma_tag']).first()
                if not QueryPublicoAlvo:
                    QueryPublicoAlvo = PublicoAlvo(nome_publicoAlvo = turmaData['turma_tag'])
                    turma.PublicosAlvo.append(QueryPublicoAlvo)
                else:
                    if not (QueryPublicoAlvo in turma.PublicosAlvo):
                        turma.PublicosAlvo.append(QueryPublicoAlvo)
                session.commit()

            return session.query(LinkCadastramento).filter_by(link_id_turma=turma.id_turma).first().as_dict()
        else:
            return {"Error":"Responsavel não cadastrado"}, 400
