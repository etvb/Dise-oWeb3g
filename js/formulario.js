var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();



function mostrarFormulario(){
	$form.slideToggle();
	return false;
}





	//eventos
$button.click(mostrarFormulario);
