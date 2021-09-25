window.onload = function()
{
    var aboutbtn = document.getElementById('aboutbtn');
    aboutbtn.onclick = toggleAbout;
    var about = document.getElementById('about');
    var listenbtn = document.getElementById('listenbtn');
    listenbtn.onclick = toggleListen;
    var listen = document.getElementById('listen');
    var contactbtn = document.getElementById('contactbtn');
    contactbtn.onclick = toggleContact;
    var contact = document.getElementById('contact');

    function toggleAbout()
    {
        if (about.style.display == 'none')
        {
            about.style.display = 'block';
        } 
        else 
        {
            about.style.display = 'none';
        }
    }

    function toggleListen()
    {
        if (listen.style.display == 'none')
        {
            listen.style.display = 'block';
        } 
        else 
        {
            listen.style.display = 'none';
        }
    }

    function toggleContact()
    {
        if (contact.style.display == 'none')
        {
            contact.style.display = 'block';
        } 
        else 
        {
            contact.style.display = 'none';
        }
    }
    
    var audio = document.getElementById('audio');
    var toggle = document.getElementById('toggle');
    var playing = false
    var progress = document.getElementById('progress');
    var progressbar = document.getElementById('progressbar');
    
    toggle.onclick = toggleAudio;
    
    function toggleAudio()
    {
        if (playing == false)
        {
            audio.play();
            toggle.innerText = '❚❚';
            playing = true
        }
        else
        {
            audio.pause();
            toggle.innerText = '▶';
            playing = false
        } 
    }

    audio.addEventListener('timeupdate', function() 
    {
        progressbar.style.width = parseInt(((audio.currentTime / audio.duration) * 100), 10) + '%';
        if (progressbar.style.width == '100%')
        {
            audio.currentTime = 0
            toggleAudio()
        }
    });

    progress.addEventListener('click', function(e) 
    {
        var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
        var clickTime = clickPosition * audio.duration;
        audio.currentTime = clickTime;
    });

    var address = document.getElementById('address');
    address.onclick = copyAddress;
    var notice = document.getElementById('notice');

    function copyAddress()
    {
        notice.style.display = 'block';
        const el = document.createElement('textarea');
        el.value = 'enquiries@adenkeegan.com';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}
