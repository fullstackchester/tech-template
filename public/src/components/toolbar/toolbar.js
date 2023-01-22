document.write(`
    <nav class="main-toolbar" id="main-toolbar">
        <span class="brand">Branding</span>
        <span class="spacer"></span>
        <ul class="menu-link">
            <li class="menu-link-item" onclick="gotoHomepage()">Home</li>
            <li class="menu-link-item">About</li>
            <li class="menu-link-item">Contact us</li>
        </ul>
    </nav>
`);

document.addEventListener('DOMContentLoaded', function() { // code para macheck if nagload na ba yung DOM
    
    var toolbar = document.getElementById('main-toolbar');

    document.addEventListener('scroll', function() { // code na mag-trigger kapag nag-scroll.

        // yung if-else na code sa baba, chine-check lang nyan kun
        // yung toolbar ay nasa pinakataas. Kapag nasa taas, or top=0,
        // magiging visible. kapag hindi, hidden sya sa DOM.
        // visual feature yan na highlight ng landing banner.

        if (toolbar.getBoundingClientRect().top == 0 ) {
            toolbar.style.visibility = 'visible';
        } else {
            toolbar.style.visibility = 'hidden'
        }
    });
});

gotoHomepage = () => window.location.href = "./index.html";
// gotoAboutpage = () => window.location.href = "./src/pages/about/about.html";