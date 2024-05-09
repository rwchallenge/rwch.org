<?php
$operationId = !empty($_POST['operation_id']) ? $_POST['operation_id'] : "";
$notificationType = !empty($_POST['notification_type']) ? $_POST['notification_type'] : "";
$datetime = !empty($_POST['datetime']) ? $_POST['datetime'] : "";
$sha1_hash = !empty($_POST['sha1_hash']) ? $_POST['sha1_hash'] : "";
$sender = !empty($_POST['sender']) ? $_POST['sender'] : "";
$codepro = !empty($_POST['codepro']) ? $_POST['codepro'] : "";
$currency = !empty($_POST['currency']) ? $_POST['currency'] : "";
$amount = !empty($_POST['amount']) ? $_POST['amount'] : "";
$withdrawAmount = !empty($_POST['withdraw_amount']) ? $_POST['withdraw_amount'] : "";
$label = !empty($_POST['label']) ? $_POST['label'] : "";

$message = "---\n"
  . "datetime: " . $datetime . "\n"
  . "operation_id: " . $operationId . "\n"
  . "notification_type: " . $notificationType . "\n"
  . "sha1_hash: " . $sha1_hash . "\n"
  . "sender: " . $sender . "\n"
  . "codepro: " . $codepro . "\n"
  . "currency: " . $currency . "\n"
  . "amount: " . $amount . "\n"
  . "withdraw_amount: " . $withdrawAmount . "\n"
  . "label: " . $label . "\n"
  . "---\n";

mail('support@rwch.org', 'Operation ' . $operationId, $message);
?>
