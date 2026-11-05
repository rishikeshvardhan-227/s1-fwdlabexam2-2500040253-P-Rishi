
function showPage(pageId, element) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active-page");

    // Update sidebar active link
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.classList.remove("active");
    });

    element.classList.add("active");

    // Update page heading
    const titles = {
        dashboard: "Dashboard",
        courses: "My Courses",
        materials: "Study Materials",
        profile: "My Profile",
        records: "Academic Records",
        attendance: "Attendance"
    };

    document.getElementById("page-title").innerText =
        titles[pageId];
}
