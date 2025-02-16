<?php

    class Core{

        public function start_app($url){

            if($url['controller']){
                if($url['controller'] === 'search'){
                    $controller = 'SearchController';
                    $method = 'search';
                }
            }

            call_user_func_array(array(new $controller, $method), array());
        }
    }