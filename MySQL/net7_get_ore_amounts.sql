use net7_b;

select
    S.name as Sector,
    sum(SOH.res_count) as Sum,
#    min(SOH.level) as Min,
#    max(SOH.level) as Max,
#    round(sum(SOH.res_count * SOH.level) / sum(SOH.res_count)) as Avg,
    (substring_index(substring_index(group_concat(SOH.level order by SOH.level), ',', ceiling(count(*)/2)), ',', -1) + substring_index(substring_index(group_concat(SOH.level order by SOH.level),',',-ceiling(count(*)/2)),',',1)) / 2 as Med,
    sum(num_mobs_lvl(SOH.res_count,SOH.level,0)) as '0',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,1)) as '1',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,2)) as '2',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,3)) as '3',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,4)) as '4',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,5)) as '5',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,6)) as '6',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,7)) as '7',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,8)) as '8',
    sum(num_mobs_lvl(SOH.res_count,SOH.level,9)) as '9'
from
    sector_objects as SO


left join
    sector_objects_harvestable_restypes as SOHR
on
    SO.sector_object_id = SOHR.group_id
left join
    sector_objects_harvestable as SOH
on
    SO.sector_object_id = SOH.resource_id
join
    assets as A
on
    SOHR.type = A.base_id
left join
    sectors as S
on
    SO.sector_id = S.sector_id
left join
    sector_objects_harvestable_oretypes as SOHO
on
    SO.sector_object_id = SOHO.resource_id
left join
    item_base as IB
on
    SOHO.additional_ore_item_id = IB.id
left join
    sector_objects_nearest_nav as SONN
on
    SO.sector_object_id = SONN.sector_object_id
    

group by
    S.name
order by
    S.name
