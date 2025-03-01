export default function Footer() {
  return (
    <footer className="relative h-32 md:h-40 overflow-hidden bg-light dark:bg-dark transition-colors">
      <div className="absolute inset-0 wave w-[200%] h-full opacity-50"></div>

      <div className="relative z-10 text-dark text-center py-4 px-2 dark:text-light">
        <a className="text-sm md:text-base" href="https://byntangxyz.my.id">
          &copy; 2024 - 2025 byntangxyz. All rights reserved.
        </a>
      </div>
    </footer>
  );
}
