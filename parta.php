<?php

if ($_REQUEST['act'] == 'employeeName'){

  $validateData = array();
  $fname=str_replace(" ", "", $_REQUEST['name']);

  if(empty($_REQUEST['name'])){$validateData['name'] = 13;}
  elseif(strlen($_REQUEST['name']) < 5){$validateData['name'] = 12;}
  elseif(strlen($_REQUEST['name']) > 20){$validateData['name'] = 12;}
  elseif(!ctype_alpha($fname)){$validateData['name'] = 11;}
  else $validateData['name'] = 0;
  
  echo json_encode($validateData);

}
if ($_REQUEST['act'] == 'employeeID'){

  $validateData = array();

  if(empty($_REQUEST['eid'])){$validateData['eid'] = 23;}
  elseif(ctype_alpha($_REQUEST['eid'])){$validateData['eid'] = 22;}
  elseif(strlen($_REQUEST['eid']) != 9){$validateData['eid'] = 21;}
  else $validateData['eid'] = 0;
  
  echo json_encode($validateData);

}
if ($_REQUEST['act'] == 'employeeDep'){

  $validateData = array();

  
  if($_REQUEST['dep'] == 'Advertising'){$validateData['dep'] = 31;}
  elseif($_REQUEST['dep'] == 'Sales'){$validateData['dep'] = 32;}
  elseif(empty($_REQUEST['dep'])){$validateData['dep'] = 33;}
  else $validateData['dep'] = 0;
  
  echo json_encode($validateData);

}
if ($_REQUEST['act'] == 'employeeBonus'){

  $validateData = array();

  
  
  
  if(empty($_REQUEST['bonus'])){$validateData['bonus'] = 42;}
  elseif(!is_numeric($_REQUEST['bonus'])){$validateData['bonus'] = 41;}
  else $validateData['bonus'] = 0;
  
  
  echo json_encode($validateData);

}



?>
