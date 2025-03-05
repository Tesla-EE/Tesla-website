//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6];

$(document).scroll(function () {
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;
    
    var activeFound = false; // Track if a section is active

    $.each(sectionArray, function(index, value) {
        var section = $('#section_' + value);
        if (section.length) { // Ensure section exists
            var offsetSection = section.offset().top - 83;
            var sectionHeight = section.outerHeight();
            
            if (docScroll1 >= offsetSection && docScroll1 < offsetSection + sectionHeight) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active'); 
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active').removeClass('inactive');
                activeFound = true;
            }
        }
    });

    // ✅ Ensure "Gallery" activates correctly when scrolling
    var gallerySection = $("#event-gallery");
    if (gallerySection.length) { // Ensure section exists
        var galleryTop = gallerySection.offset().top - 83;
        var galleryHeight = gallerySection.outerHeight();

        if (docScroll1 >= galleryTop && docScroll1 < galleryTop + galleryHeight) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link[href="#event-gallery"]').addClass('active');
            activeFound = true;
        }
    }

    // ✅ Fix: Ensure "Contacts" activates only when reaching the footer
    var contactsSection = $("#footer");
    if (contactsSection.length) {
        var contactsTop = contactsSection.offset().top - 300; // Adjust if needed
        if (docScroll >= contactsTop) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link[href="#footer"]').addClass('active');
            activeFound = true;
        }
    }

    // ✅ If no section is active, remove all active states
    if (!activeFound) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
    }
});

// ✅ Ensure clicking "Gallery" scrolls and activates correctly
$('.navbar-nav .nav-item .nav-link[href="#event-gallery"]').click(function(e) {
    e.preventDefault();
    var gallerySection = $("#event-gallery");
    if (gallerySection.length) {
        var offsetGallery = gallerySection.offset().top - 83;

        $('html, body').animate({ scrollTop: offsetGallery }, 500);
        
        // ✅ Highlight "Gallery" and remove active from others
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    }
});

// ✅ Ensure clicking "Contacts" scrolls and activates correctly
$('.navbar-nav .nav-item .nav-link[href="#footer"]').click(function (e) {
    e.preventDefault();
    var contactsSection = $("#footer");
    if (contactsSection.length) {
        var offsetClick = contactsSection.offset().top - 83;
        $('html, body').animate({ scrollTop: offsetClick }, 300);
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    }
});

// ✅ Ensure clicking other sections scrolls and activates correctly
$('.click-scroll').each(function(index) {
    $(this).click(function(e) {
        var section = $('#' + 'section_' + sectionArray[index]);
        if (section.length) {
            var offsetClick = section.offset().top - 83;
            e.preventDefault();
            $('html, body').animate({ scrollTop: offsetClick }, 300);
        }
    });
});

// ✅ Detect if the page is loaded with a hash (e.g., index.html#event-gallery)
$(document).ready(function () {
    var hash = window.location.hash;
    if (hash === "#event-gallery") {
        var target = $(hash);
        if (target.length) {
            var offsetGallery = target.offset().top - 83; // Adjust for navbar height
            $('html, body').animate({ scrollTop: offsetGallery }, 500);
        }
    }
});


$(document).ready(function() {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');

    var currentPage = window.location.pathname.split("/").pop(); // Get the current page filename

    if (currentPage === "committee.html") {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link[href="committee.html"]').addClass('active');
    }
});
