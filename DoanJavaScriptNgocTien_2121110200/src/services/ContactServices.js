import httpAxios from "../httpAxios";


function getAll()
{
    return httpAxios.get("contact/index");
}
function getById(id)
{
    return httpAxios.get("contact/show/" + id);
}
function create(data)
{
    return httpAxios.post("contact/store", data);
}
function update(data, id)
{
    return httpAxios.post("contact/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("contact/destroy/" + id);
}
const ContactService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default ContactService;