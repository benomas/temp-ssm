var resources = function(){
  return [
    {
      resource:"users",
      singleLabel:"Usuario",
      listLabel:"Usuarios",
      singleIcon:"person",
      listIcon:"people",
      path:"users",
      actions:{
        index:{
          //path:"users",
          icon:"list",
          label:"Listado de usuarios",
          //component:...
        },
        show:{
          icon:"details",
          label:"Ver usuario",
        },
        create:{
          icon:"create",
          label:"Crear usuario",
        },
        edit:{
          icon:"update",
          label:"Editar usuario",
        },
        delete:{
          icon:"Update",
          label:"Eliminar usuario",
        },
      }
    },
    {
      resource:"roles",
      singleLabel:"Rol",
      listLabel:"Roles",
      singleIcon:"supervisor_account",
      listIcon:"supervisor_account",
      path:"roles",
      actions:{
        index:{
          icon:"list",
          label:"Listado de roles",
        },
        show:{
          icon:"details",
          label:"Ver rol",
        },
        create:{
          icon:"create",
          label:"Crear rol",
        },
        edit:{
          icon:"update",
          label:"Editar rol",
        },
        delete:{
          icon:"Update",
          label:"Eliminar rol",
        },
      }
    },
    {
      resource:"permissions",
      singleLabel:"Permiso",
      listLabel:"Permisos",
      singleIcon:"no_encryption",
      listIcon:"no_encryption",
      path:"permissions",
      actions:{
        index:{
          icon:"list",
          label:"Listado de permisos",
        },
        show:{
          icon:"details",
          label:"Ver permiso",
        },
        create:{
          icon:"create",
          label:"Crear permiso",
        },
        edit:{
          icon:"update",
          label:"Editar permiso",
        },
        delete:{
          icon:"Update",
          label:"Eliminar permiso",
        },
      }
    },
  ];
}
export default new resources();
