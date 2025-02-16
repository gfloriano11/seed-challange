<?php

    class SearchController{

        public function search(){

            $info = json_decode(file_get_contents('php://input'), true);

            $prompt = $info['prompt'];

            $search = new Search;
            $search->search($prompt);

            echo json_encode([
                'success' => true,
                'message' => 'deu boa'
            ]);

            exit;
        }
    }