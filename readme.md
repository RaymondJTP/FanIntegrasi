Run in terminal 
npm i

1. Hit Endpoint Registrasi Untuk Dapat Password
contoh request : 
{
    nama : 'tes',
    email : 'email@mail.com',
    npp : '13131',
    npp_supervisor: '11111',
    password: 'passwordtes'

}

2. Hit endpoint login
contoh request : 
{
    nama : 'tes',
    email : 'email@mail.com',
    npp : '13131',

}

Dari login akan mendapatkan access_token dan masukan access token ke dalam header

Lakukan proses insert data
3. Insert Data
header : 
{
    access_token
}
contoh request : 
{
    type :'IN',
    waktu : '2022-11-19 17:07:52.227' 
}

4. Get Data
header : 
{
    access_token
}
5. Approve
header : 
{
    access_token
}
contoh request : 
{
    approve :'YES',
    id_users : '6' 
}
