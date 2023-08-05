const footer = `
    <div class="container pb-12 gap-x-7 flex justify-between max-lg:flex-col max-lg:gap-12">
        <!-- Logo and Brand info -->
        <div class="flex flex-col max-lg:items-center max-lg:text-center">
            <a class="w-16" href="#">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Solid</title>
                    <path
                        d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
                </svg>
            </a>
            <p class="text-slate-400 mt-4 max-w-sm">
                Specializes in providing high-quality, stylish products for your
                wardrobe
            </p>
        </div>
        <!-- Site map | Quick ability -->
        <div class="flex gap-10 justify-between max-xl:flex-col max-lg:items-center max-md:text-center">
            <div class="flex gap-16 max-sm:flex-col max-sm:gap-8">
                <ul>
                    <li class="uppercase font-semibold mb-2 text-slate-600">shop</li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">All Collection</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Winter Edition</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Discount</a>
                    </li>
                </ul>
                <ul>
                    <li class="uppercase font-semibold mb-2 text-slate-600">
                        company
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Aboute Us</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Contact</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Affiliates</a>
                    </li>
                </ul>
                <ul>
                    <li class="uppercase font-semibold mb-2 text-slate-600">
                        support
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">FAQs</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Cookie Policy</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-slate-400 font-medium hover:text-slate-600 transition-all duration-700"
                            href="#">Terms of Use</a>
                    </li>
                </ul>
            </div>
            <!-- Payment Method -->
            <div>
                <p class="uppercase font-semibold text-slate-600">Payment Method</p>
                <div class="flex gap-4">
                    <div class="w-6 mt-3">
                        <img src="./assets/img/paypal_318-674245.avif" alt="" />
                    </div>
                    <div class="w-6 mt-3">
                        <img src="./assets/img/logos/Mastercard-Logo.png" alt="" />
                    </div>
                    <div class="w-6 mt-3">
                        <img src="./assets/img/logos/VISA-logo.png" alt="" />
                    </div>
                    <div class="w-6 mt-3">
                        <img src="./assets/img/logos/Neteller.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container border-t-[1px] border-slate-300 py-10 flex justify-center text-slate-400">
        <p>Copyright &copy2022 Nostra.All right reserved</p>
    </div>
`;

export default footer;