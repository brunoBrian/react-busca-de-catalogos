<?php

$menu = [
  ['title'=>"Home",'link'=>"#home"],
  ['title'=>"Sobre",'link'=>"#sobre"],
  ['title'=>"Contato",'link'=>"#contato"],
  ['title'=>"Mapa",'link'=>"#mapa"]
];

$dados = [
  ['title'=>"Futebol", 'description'=>"Futebol 2018", 'detail'=>"Texto de detalhe do cartão 1", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Novela", 'description'=>"As melhores novelas", 'detail'=>"Texto de detalhe do cartão 2", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Séries", 'description'=>"As séries premiadas", 'detail'=>"Texto de detalhe do cartão 3", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Filmes", 'description'=>"Filmes em destaque", 'detail'=>"Texto de detalhe do cartão 4", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Desenhos", 'description'=>"Desenhos Animados", 'detail'=>"Texto de detalhe do cartão 5", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Programas", 'description'=>"Todos os Programas", 'detail'=>"Texto de detalhe do cartão 6", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"BBB", 'description'=>"BBB 19", 'detail'=>"Texto de detalhe do cartão 7", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"A Fazenda", 'description'=>"A fazenda 2018", 'detail'=>"Texto de detalhe do cartão 8", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Encrenca", 'description'=>"Encrenca redetv", 'detail'=>"Texto de detalhe do cartão 9", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"MasterChef", 'description'=>"O melhor da Band", 'detail'=>"Texto de detalhe do cartão 10", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
];


if(isset($_GET['menu'])){
    echo json_encode($menu);exit;
}
if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}