const navBar = `
<!-- Logo -->
<a class="w-16 max-sm:hidden" href="#">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Solid</title>
        <path
            d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
    </svg>
</a>
<!-- Menubar -->
<ul class="menuBar transition-transform max-lg:-translate-x-[256px] relative flex gap-8 z-10 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-64 max-lg:pl-6 max-lg:py-9 max-lg:bg-white max-lg:flex-col max-lg:border-r-2 max-lg:gap-3">
<svg fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 stroke-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</button>    
<li class="relative max-lg:hover:ml-2 max-lg:transition-all max-lg:hover:bg-slate-300 max-lg:py-3 max-lg:pl-2 max-lg:w-[90%] max-lg:rounded-lg ">
    <div class="flex">
    <a class="w-full h-full inline-block">Shop</a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    </div>    
        <div class="absolute top-2 left-0 w-40">
            <ul
                class="relative bg-white z-50 top-10 w-40 rounded-xl shadow-md py-4 px-2 border-2 border-slate-100 hidden flex-col gap-4 max-lf">
                <a class="py-1 pl-2 rounded-md" href="./Shop.html">T-Shirt</a>
                <a class="py-1 pl-2 rounded-md" href="./Shop.html">Shoes</a>
                <a class="py-1 pl-2 rounded-md" href="./Shop.html">Pants</a>
                <a class="py-1 pl-2 rounded-md" href="./Shop.html">hoodie</a>
            </ul>
        </div>
    </li>
    <li class="relative max-lg:hover:ml-2 max-lg:transition-all max-lg:hover:bg-slate-300 max-lg:py-3 max-lg:w-[90%] max-lg:pl-2 max-lg:rounded-lg"><a class="w-full h-full inline-block" href="./Shop.html">New arrival</a></li>
    <li class="relative max-lg:hover:ml-2 max-lg:transition-all max-lg:hover:bg-slate-300 max-lg:py-3 max-lg:w-[90%] max-lg:pl-2 max-lg:rounded-lg"><a class="w-full h-full inline-block" href="#">Brands</a></li>
    <li class="relative max-lg:hover:ml-2 max-lg:transition-all max-lg:hover:bg-slate-300 max-lg:py-3 max-lg:w-[90%] max-lg:pl-2 max-lg:rounded-lg"><a class="w-full h-full inline-block" href="./Shop.html">Most Wanted</a></li>
</ul>
<!-- Search box, Cart, Register Section -->
<div class="flex items-center gap-3 max-md:justify-between max-sm:w-full max-sm:py-2 max-sm:flex-col">
    <!-- Search Box -->
    <div class="p-2 text-md rounded-xl border-2 border-slate-200 bg-slate-50 flex gap-2 mr-3 max-sm:w-full max-sm:order-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 stroke-slate-400">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input class="search-box bg-transparent w-48" type="text" placeholder="Search" />
    </div>
    <div class="flex items-center gap-5 max-sm:w-full max-sm:justify-between max-sm:pr-2">
    <!-- Logo -->
    <a class="w-16 sm:hidden" href="#">
        <svg role="img" viewBox="0 0 24 24" class="w-16" xmlns="http://www.w3.org/2000/svg">
            <title>Solid</title>
            <path
                d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
        </svg>
    </a>
    <div class="flex items-center gap-4">
    <!-- Cart Btn -->
    <div class="relative">
        <a class="cart-btn" href="./cart.html">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 stroke-slate-700 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </a>
        <!-- Purchased Products List -->
        <div
            class="productsPurchased-number absolute text-white bg-black text-[8px] px-1 top-[-0.5rem] right-[-0.5rem] rounded-sm">
            0
        </div>
        <!-- Cart Box -->
        <div
            class="cart-modal max-sm:hidden hidden absolute w-[290px] min-h-[390px] max-h-[600px] rounded-xl border-2 border-slate-200 shadow-md right-0 top-10 pt-4 px-4 bg-white z-10">
            <p class="text-center mb-4 pb-4 border-b-[1px] border-slate-200">
                Cart
            </p>
            <div class="cart-proudct-section overflow-scroll scrollbar-none h-56">
                <!-- If Cart box in empty -->
                <div class="empty-cart flex justify-center flex-col w-full items-center mb-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-2h-28 h-28 fill-slate-400">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd" />
                    </svg>
                    <p class="font-semibold text-slate-400">Empty</p>
                </div>
            </div>
            <!-- Check Out Button -->
            <div
                class="py-4 flex justify-center items-start border-t-[1px] border-slate-200 absolute bottom-0">
                <button
                    class="px-20 py-2 border-2 border-slate-200 rounded-lg bg-slate-100 cursor-pointer">
                    Check Out
                </button>
            </div>
        </div>
    </div>
    <!-- Register Btn -->
    <button class="regiter-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 stroke-slate-700">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    </button>
     <!-- Burger menu btn -->
    <div class="burger-btn bg-slate-900 rounded-[3px] p-1 lg:hidden">
        <svg viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </div>
    </div>
    </div>
</div>
`;

export default navBar;