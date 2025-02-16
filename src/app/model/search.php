<?php

class Search {

    public static function search($prompt) {

        $data['equipments'] = json_decode(file_get_contents('../../data/equipments.json'), true);

        if ($data['equipments']) {
            foreach ($data['equipments'] as $equipment) {
                if (strpos(strtolower($equipment['EquipmentName']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; 
                }
            }
        } 

        return $result;

    }
}
?>
