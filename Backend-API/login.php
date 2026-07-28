<?php
// Tiga baris ini WAJIB ada biar React (yang beda port) diizinin ngambil data dari PHP ini
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Nangkap data JSON yang dikirim sama React
$data = json_decode(file_get_contents("php://input"));

// Pastikan data email dan password tidak kosong
if(isset($data->email) && isset($data->password)) {
    $email = $data->email;
    $password = $data->password;

    // SIMULASI CEK DATABASE: 
    // Nanti bagian ini diganti sama kodingan koneksi ke MySQL lu
    if($email === "admin@gmail.com" && $password === "rahasia123") {
        echo json_encode([
            "status" => "sukses",
            "pesan" => "Login berhasil, selamat datang!"
        ]);
    } else {
        echo json_encode([
            "status" => "gagal",
            "pesan" => "Email atau password salah brok!"
        ]);
    }
} else {
    echo json_encode(["status" => "gagal", "pesan" => "Data tidak lengkap"]);
}
?>