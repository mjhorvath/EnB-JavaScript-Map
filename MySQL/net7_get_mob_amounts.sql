use net7_b;

select
    S.name as Sector,
    sum(SOM.mob_count) as Sum,
#    min(MB.level) as Min,
#    max(MB.level) as Max,
#    round(sum(SOM.mob_count * MB.level) / sum(SOM.mob_count)) as Avg,
    (substring_index(substring_index(group_concat(MB.level order by MB.level), ',', ceiling(count(*)/2)), ',', -1) + substring_index(substring_index(group_concat(MB.level order by MB.level),',',-ceiling(count(*)/2)),',',1)) / 2 as Med,
    sum(num_mobs_lvl(SOM.mob_count,MB.level,0)) as '0',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,1)) as '1',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,2)) as '2',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,3)) as '3',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,4)) as '4',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,5)) as '5',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,6)) as '6',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,7)) as '7',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,8)) as '8',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,9)) as '9',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,10)) as '10',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,11)) as '11',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,12)) as '12',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,13)) as '13',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,14)) as '14',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,15)) as '15',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,16)) as '16',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,17)) as '17',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,18)) as '18',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,19)) as '19',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,20)) as '20',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,21)) as '21',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,22)) as '22',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,23)) as '23',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,24)) as '24',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,25)) as '25',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,26)) as '26',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,27)) as '27',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,28)) as '28',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,29)) as '29',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,30)) as '30',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,31)) as '31',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,32)) as '32',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,33)) as '33',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,34)) as '34',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,35)) as '35',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,36)) as '36',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,37)) as '37',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,38)) as '38',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,39)) as '39',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,40)) as '40',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,41)) as '41',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,42)) as '42',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,43)) as '43',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,44)) as '44',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,45)) as '45',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,46)) as '46',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,47)) as '47',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,48)) as '48',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,49)) as '49',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,50)) as '50',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,51)) as '51',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,52)) as '52',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,53)) as '53',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,54)) as '54',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,55)) as '55',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,56)) as '56',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,57)) as '57',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,58)) as '58',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,59)) as '59',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,60)) as '60',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,61)) as '61',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,62)) as '62',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,63)) as '63',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,64)) as '64',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,65)) as '65',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,66)) as '66',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,67)) as '67',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,68)) as '68',
    sum(num_mobs_lvl(SOM.mob_count,MB.level,69)) as '69'
from
    sector_objects_mob as SOM


left join
    sector_objects as SO
on
    SOM.mob_id = SO.sector_object_id
left join
    sectors as S
on
    SO.sector_id = S.sector_id


left join
    mob_spawn_group as MSG
on
    SOM.mob_id = MSG.spawn_group_id
left join
    mob_base as MB
on
    MSG.mob_id = MB.mob_id


group by
    S.name
order by
    S.name
