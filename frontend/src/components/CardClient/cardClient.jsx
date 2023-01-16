import "./styled.css";
import { useEffect } from "react";
import api from "../../services/api";
import useGlobalContext from "../../hooks/useGlobalContext";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import ConfirmModal from "../ConfirmModal/confirmModal";

function CardClient() {
  const { 
    users, 
    setUsers,
    openDelete, 
    setOpenDelete,
    currentUser, 
    setCurrentUser
   } = useGlobalContext();

   
   async function handleConfirmDelete() {
    try {
      const response = await api.delete(`/client/${currentUser}`, {
      });

      if (response.status > 204) {
        return;
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelete(false);
    }
  }


  function handleDeletePost(post) {
    setCurrentUser(post);
    setOpenDelete(true);
  }

  function handleCloseDelete() {
    setOpenDelete(false);
  }
  
  
  useEffect(() => {
    async function loadPost() {
      try {
        const response = await api.get("/client", {});

        if (response.status > 204) {
          return;
        }

        setUsers([...response.data]);
      } catch (error) {
        window.alert(error.message);
      }
    }
    loadPost();
    
  }, [users, setUsers]);

  return (
    <>
      <div className="container__card__client">
        <div className="container__post__client">
          <div className="posts__client">
            {users.map((item) => {
              return (
                <div className="card__client" key={item._id}>
                  <div className="btn">
              <button className="btn__delete">
                <img
                  src={Delete}
                  alt="Icone Delete"
                  onClick={() => handleDeletePost(item._id)}
                />
              </button>
              <button className="btn__edit">
                <img
                  src={Edit}
                  alt="Icone Editar"  
                />
              </button>
            </div>
                  <div className="main__card__client">
                    <span>
                      <span className="title">Nome: <span> {item.name}</span></span>
                    </span>
                    <span>
                      <span className="title">Email: <span> {item.email}</span></span>
                    </span>
                    <span>
                      <span className="title">Telefone: <span> {item.telephone}</span></span>
                    </span>
                    <span>
                      <span className="title">Endereço: <span> {item.address}</span></span>
                    </span>
                    <span>
                      <span className="title">CPF: <span> {item.cpf}</span></span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ConfirmModal
        titulo="Confirma a exclusão?"
        btnConfirm="Excluir"
        btnCancel="Cancelar"
        openDelete={openDelete}
        handleClose={handleCloseDelete}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default CardClient;
