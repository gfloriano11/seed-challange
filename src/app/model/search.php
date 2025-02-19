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
            foreach ($data['materials'] as $materials) {
                if (strpos(strtolower($materials['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $materials; // 
                }
            }
        }

        if ($data['purchase_orders']) {
            foreach ($data['purchase_orders'] as $purchase) {
                if (strpos(strtolower($purchase['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $purchase; // pedido de compra
                }
            }
        } 


        if ($data['sales_orders']) {
            foreach ($data['sales_orders'] as $sales) {
                if (strpos(strtolower($sales['MaterialName']), strtolower($prompt)) !== false) {
                    $result[] = $sales; // pedido de compra
                }
            }
        } 

        if ($data['workforce']) {
            foreach ($data['workforce'] as $workforce) {
                if (strpos(strtolower($workforce['Name']), strtolower($prompt)) !== false) {
                    $result[] = $workforce; // pedido de compra
                }
            }
        }

        return $result;

    }
}
?>
