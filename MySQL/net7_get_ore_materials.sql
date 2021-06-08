use net7;
select
    name as Name, level as Level, sub_category as SubCategory, price as Price, description as Description
from
    item_base
where
    category = 81
order by
    level desc, name;
select
    name as Name, level as Level, sub_category as SubCategory, price as Price, description as Description
from
    item_base
where
    category = 80
order by
    level desc, name;