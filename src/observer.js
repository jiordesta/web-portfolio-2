const intoview = (entries, observer) => {
    const hashMap = new Map(
        [
            ['about','0'],
            ['academics','1'],
            ['skills','2'],
            ['projects','4'],
            ['services','3'],
            ['contact','5'],
        ]
    )

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = document.getElementById(hashMap.get(entry.target.id))
            element.classList.add('active')
        } else {
            const element = document.getElementById(hashMap.get(entry.target.id))
            element.classList.remove('active')
        }
    });
}

export const observe = (section) => {
    const observer = new IntersectionObserver(intoview)
    const element = document.getElementById(section)

    observer.observe(element)
}