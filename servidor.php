<?php

$menu = [
  ['title'=>"Home",'link'=>"#home"],
  ['title'=>"Sobre",'link'=>"#sobre"],
  ['title'=>"Contato",'link'=>"#contato"],
  ['title'=>"Mapa",'link'=>"#mapa"]
];

$dados = [
  ['title'=>"Notícia 1", 'description'=>"Descrição do cartão 1", 'detail'=>"Texto de detalhe do cartão 1", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'description'=>"Descrição do cartão 2", 'detail'=>"Texto de detalhe do cartão 2", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'description'=>"Descrição do cartão 3", 'detail'=>"Texto de detalhe do cartão 3", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 4", 'description'=>"Descrição do cartão 4", 'detail'=>"Texto de detalhe do cartão 4", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 5", 'description'=>"Descrição do cartão 5", 'detail'=>"Texto de detalhe do cartão 5", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 6", 'description'=>"Descrição do cartão 6", 'detail'=>"Texto de detalhe do cartão 6", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 7", 'description'=>"Descrição do cartão 7", 'detail'=>"Texto de detalhe do cartão 7", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 8", 'description'=>"Descrição do cartão 8", 'detail'=>"Texto de detalhe do cartão 8", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 9", 'description'=>"Descrição do cartão 9", 'detail'=>"Texto de detalhe do cartão 9", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 10", 'description'=>"Descrição do cartão 10", 'detail'=>"Texto de detalhe do cartão 10", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 11", 'description'=>"Descrição do cartão 11", 'detail'=>"Texto de detalhe do cartão 11", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"]
];


if(isset($_GET['menu'])){
    echo json_encode($menu);exit;
}
if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}