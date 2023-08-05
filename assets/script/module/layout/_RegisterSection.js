const registerSection = `
<div
class="registerModalBox relative overflow-hidden w-[70rem] max-lg:w-[25rem] h-[40rem] max-sm:h-full border-2 border-slate-100 rounded-xl py-16 px-8 bg-white grid grid-cols-2 max-lg:grid-cols-1 place-items-center">
<button
    class="registerModalCloseBtn absolute top-0 left-0 px-4 py-1 rounded-br-2xl bg-slate-100 hover:bg-slate-200 transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
</button>
<div class="flex gap-4 max-lg:gap-0 max-lg:justify-center w-[22rem] overflow-hidden">
    <!-- Login Box -->
    <div class="login-section flex flex-col justify-center items-center">
        <div>
            <a href="#">
                <svg class="w-20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Solid</title>
                    <path
                        d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
                </svg>
            </a>
            <p class="font-medium text-xl text-slate-700 mt-10 mb-20">
                LOGIN
            </p>
        </div>
        <form class="flex flex-col" action="#" method="Post">
            <div class="mb-6">
                <p class="text-center mb-1 text-sm text-slate-400">
                    Username or Email
                </p>
                <input class="text-center rounded-full border-2 border-slate-200 py-2 px-4"
                    type="text" />
            </div>
            <div class="mb-2">
                <p class="text-center mb-1 text-sm text-slate-400">
                    Password
                </p>
                <input class="text-center rounded-full border-2 border-slate-200 py-2 px-4"
                    type="password" />
            </div>
            <button type="submit"
                class="border-2 border-slate-200 rounded-full bg-slate-100 py-3 mt-5 mb-4">
                LOGIN
            </button>
            <a href="#" class="reset-link text-center text-xs text-blue-400">Forgot password?</a>
        </form>
        <a class="sing-link text-blue-400 mt-7 underline underline-offset-8" href="#">Sign In</a>
    </div>
    <!-- Sign In -->
    <div class="singin-section flex flex-col justify-center items-center w-full hidden">
        <div>
            <a href="#">
                <svg class="w-20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Solid</title>
                    <path
                        d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
                </svg>
            </a>
            <p class="font-medium text-xl text-slate-700 mt-6 mb-14">
                SING IN
            </p>
        </div>
        <form class="flex flex-col gap-3 w-full" action="#" method="Post">
            <div class="flex justify-between gap-3">
                <div class="w-[48%] inline-block">
                    <p class="text-center mb-1 text-sm text-slate-400">
                        First Name
                    </p>
                    <input class="w-full text-center rounded-full border-2 border-slate-200 py-2 px-"
                        type="text" />
                </div>
                <div class="w-[48%] inline-block">
                    <p class="text-center mb-1 text-sm text-slate-400">
                        Last Name
                    </p>
                    <input class="w-full text-center rounded-full border-2 border-slate-200 py-2 px-2"
                        type="text" />
                </div>
            </div>
            <div>
                <p class="text-center mb-1 text-sm text-slate-400">Email</p>
                <input class="w-full text-center rounded-full border-2 border-slate-200 py-2 px-2"
                    type="email" />
            </div>
            <div>
                <p class="text-center mb-1 text-sm text-slate-400">
                    Password
                </p>
                <div class="flex w-full items-center px-2 rounded-full border-2 border-slate-200">
                    <input class="text-center rounded-full py-2" type="password" />
                    <svg class="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
            <button type="submit"
                class="border-2 border-slate-200 rounded-full bg-slate-100 py-3 mt-5 mb-4">
                SIGN IN
            </button>
            <a href="#" class="reset-link text-center text-xs text-blue-400">Forgot password?</a>
        </form>
        <a class="login-link text-blue-400 mt-7 underline underline-offset-8" href="#">Login</a>
    </div>
    <!-- Forgot -->
    <div class="reset-section flex flex-col justify-center items-center hidden">
        <div>
            <a href="#">
                <svg class="w-20 max-auto" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Solid</title>
                    <path
                        d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z" />
                </svg>
            </a>
            <p class="font-medium text-xl text-slate-700 mt-10 mb-20">
                Reset Password
            </p>
        </div>
        <form class="flex flex-col" action="#" method="Post">
            <div class="mb-6">
                <p class="text-center mb-1 text-sm text-slate-400">
                    Email or Number
                </p>
                <input class="text-center rounded-full border-2 border-slate-200 py-2 px-4"
                    type="text" />
            </div>
            <button type="submit"
                class="border-2 border-slate-200 rounded-full bg-slate-100 py-3 mt-5 mb-4">
                Reset
            </button>
            <a href="#" class="reset-link text-center text-xs text-blue-400">Forgot password?</a>
        </form>
        <a class="login-link text-blue-400 mt-7 underline underline-offset-8" href="#">Login</a>
    </div>
</div>
<div class="max-lg:hidden">
    <img class="w-96" src="./assets/img/undraw_access_account_re_8spm.svg" alt="" />
</div>
</div>`;

export default registerSection;