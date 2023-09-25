import httpAxios from "../httpAxios";


function getAll()
{
    return httpAxios.get("user/index");
}
function getById(id)
{
    return httpAxios.get("user/show/" + id);
}
function create(data)
{
    return httpAxios.post("user/store", data);
}
function update(data, id)
{
    return httpAxios.post("user/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("user/destroy/" + id);
}
const UserService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default UserService;