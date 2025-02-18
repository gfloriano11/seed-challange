<?php

class Search {

    public static function search($prompt) {

        $data['equipments'] = json_decode(file_get_contents('../../data/equipments.json'), true);
        $data['materials'] = json_decode(file_get_contents('../../data/materials.json'), true);
        $data['purchase_orders'] = json_decode(file_get_contents('../../data/purchase_orders.json'), true);
        $data['sales_orders'] = json_decode(file_get_contents('../../data/sales_orders.json'), true);
        $data['workforce'] = json_decode(file_get_contents('../../data/workforce.json'), true);

        if ($data['equipments']) {
            foreach ($data['equipments'] as $equipment) {
                if (strpos(strtolower($equipment['EquipmentName']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; 
                }
            }
        }

        if ($data['materials']) {
            foreach ($data['materials'] as $equipment) {
                if (strpos(strtolower($equipment['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; // 
                }
            }
        }

        if ($data['purchase_orders']) {
            foreach ($data['purchase_orders'] as $equipment) {
                if (strpos(strtolower($equipment['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; // pedido de compra
                }
            }
        } 


        if ($data['sales_orders']) {
            foreach ($data['sales_orders'] as $equipment) {
                if (strpos(strtolower($equipment['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; // pedido de compra
                }
            }
        } 

        if ($data['sales_orders']) {
            foreach ($data['sales_orders'] as $equipment) {
                if (strpos(strtolower($equipment['Name']), strtolower($prompt)) !== false) {
                    $result[] = $equipment; // pedido de compra
                }
            }
        } 

        return $result;

    }
}
?>
