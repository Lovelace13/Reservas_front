const admin = {
  role: '1',
  permission: [
     'registrar',
     'lista-negocios',
     'update-negocios',
  ],
};
const dueño = {
  role: '2',
  permission: [
     'registrar-negocio',
     'lista-locales',
     'update-locales',
  ],
};
const cliente = {
  role: '3',
  permission: [
     'reservar',
     'hoteles',
     'lista-locales',
  ],
};

export const canView = (role, permiso) => {
  if (role === '1') {
     return admin.permission.indexOf(permiso) >= 0;
  } else if (role === '2') {
     return secretary.permission.indexOf(permiso) >= 0;
  } else if (role === '3') {
     return doctor.permission.indexOf(permiso) >= 0;
  } 
  return false;
};
