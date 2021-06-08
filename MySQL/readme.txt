These scripts were built against the database dump named "Net7.2009.25.08.sql" 
which can be downloaded from "http://net-7.org/database/". Both the 
"net7_create_num_mobs_lvl.sql" and "net7_create_sector_objects_types.sql" 
scripts need to be executed first to prepare things for executing the other 
scripts.

Next, run the "net7_get_all_locations_for_compute.sql" script to get a list of 
objects and their positions. Then edit the "compute_nearest_nav.html" file with 
the results. (Some formatting of the results may be necessary first before 
importing/exporting or copying/pasting.) The "compute_nearest_nav.html" file is 
used to compute the nearest neighboring NAV point for each object. It is normal 
for the script to appear to timeout in your browser when it is really in fact 
still processing. The results from "compute_nearest_nav.html" should then be 
copied into the "net7_create_sector_objects_nearest_nav.sql" script, which then 
creates a new table listing the NAVs. (Again, some formatting of the results 
may be required first.)

Executing "net7_convert_blobs_to_text.sql" is optional -- and is in fact not 
recommended if you intend to _use_ the data in a production setting -- but you 
won't be able to read the object names in MySQL Workbench otherwise. It would 
have been better if I had instead written the other scripts to use the CAST 
function which would have eliminated the need for the script.
