import httpAxios from "../httpAxios";

function getAll() {
  return httpAxios.get("brand/index");
}

function getById(id) {
  return httpAxios.get("brand/show/"+id);
}

function create(data) {
  return httpAxios.post("brand/store",data);
}

function update(data,id)
{
    return httpAxios.post(`brand/update/${id}`,data);
}
function remove(id)
{
    return httpAxios.delete(`brand/destroy/${id}`);
}


const BrandServices = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
  
};

export default BrandServices;
