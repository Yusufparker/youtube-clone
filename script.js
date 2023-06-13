$(document).ready(function(){
    showKategori()
    showAllVideo()


})




const showKategori=()=>{

    let kategori = ['Semua','Musik','Game','Mix','Live','Acara memasak','Kartun','Komedi sketsa','Sepak bola','Game petualangan aksi','Baru diupload','Ditonton','Baru untuk anda']
    let kategori_scroll = `<div class="btn-kategori kategori-eksplorasi"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></svg> Eksplorasi
    </div>`
    for(var i = 0; i<kategori.length; i++){
        if(i == 0){
            kategori_scroll+=`<div class="btn-kategori kategori-active">
            ${kategori[i]}
        </div>`
        }else{
            kategori_scroll+=`<div class="btn-kategori">
            ${kategori[i]}
        </div>`
        }
    }
    $('.kategori-scroll').html(kategori_scroll)
}


const showAllVideo = () =>{

    let card = ``
    $.ajax({
        url:"data video.json",
        success:response =>{
            response.forEach(data => {
                card+= card_video(data)
                
            });
            $('.content-video').html(card)
    
        }
    })
}




const card_video = data =>{
    return`<div class="col-md-4 card-video">
    <img class="w-100 img-tumbnail" src="img/${data.thumbnail}" alt="">
    <div class="row mt-2">
        <div class="col-2">
            <img class="img-pp-yt" src="img/${data.pp}" alt="">
        </div>
        <div class="col text-video">
            <p class="deskripsi-video">${data.judul}</p>
            <p class="nama">${data.nama_chanel}</p>
            <p class="ket-video">${data.ditonton} kali ditonton . ${data.waktu} yang lalu</p>
        </div>
    </div>
</div>`
}

