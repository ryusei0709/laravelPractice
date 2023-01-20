<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/css/portal.css">
	<link rel="stylesheet" href="/css/portalicon.css">
	<link rel="dns-prefetch" href="//fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<title>Document</title>
	<script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body class="app">
	@extends('layouts.sidemenu');
	<div class="app-wrapper">
		<div class="app-content pt-3 p-md-3 p-lg-4">
			<div class="container-xl">
				<div class="row g-3 mb-4 align-items-center justify-content-between">
					<div class="col-auto">
						<h1 class="app-page-title mb-0">To do</h1>
					</div>
				</div><!--//row-->
				<div class="tab-content" id="orders-table-tab-content">
					<div class="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
						<div class="app-card app-card-orders-table shadow-sm mb-5">
							<div class="app-card-body">
								<div id="app"></div>
							</div>
						</div><!--//app-card-->
					</div><!--//tab-pane-->

				</div><!--//tab-content-->



			</div><!--//container-fluid-->
		</div><!--//app-content-->



	</div>
</body>

</html>