<?php

    class SearchController{

        public function search(){

            $info = json_decode(file_get_contents('php://input'), true);

            $prompt = $info['prompt'];

            $search = Search::search($prompt);

            echo json_encode([
                'equipments' => $search,
                'success' => true,
                'message' => 'deu boa'
            ]);

            exit;
        }
    }