import httpAxios from "../httpAxios";


function getAll()
{
    return httpAxios.get("topic/index");
}
function getById(id)
{
    return httpAxios.get("topic/show/" + id);
}
function create(data)
{
    return httpAxios.post("topic/store", data);
}
function update(data, id)
{
    return httpAxios.post("topic/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("topic/destroy/" + id);
}
function getTopicByParentId(parent_id)
{
    return httpAxios.get(`topic_list/${parent_id}`);
}
function getTopicBySlug(slug)
{
    return httpAxios.get("topic/show/"+slug);
}

const TopicService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getTopicByParentId:getTopicByParentId,
    getTopicBySlug:getTopicBySlug
}
export default TopicService;