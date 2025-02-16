<?php

    require_once ('core/Core.php');

    require_once ('controller/SearchController.php');

    require_once ('model/search.php');

    ob_start();

        $core = new Core;

        $core->start_app($_GET);

        $result = ob_get_contents();

    ob_end_clean();

    echo $result;

    // var_dump($_GET);