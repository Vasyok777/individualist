import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions — Individualist",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-black py-16 flex-1">
      <Container>
        <div>
          <p className="text-sm text-black/40 mb-2">Останнє оновлення: 10.06.2026</p>
          <h1 className="font-black uppercase text-4xl md:text-5xl mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-10 text-[17px] leading-7 text-black/75">

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Загальні положення</h2>
              <p className="mb-4">
                Ці Умови надання послуг (далі — «Умови», «Договір») є публічною офертою та регулюють порядок доступу та використання онлайн-воркшопу «5-денний інтенсив: вихід бренду на міжнародний ринок» (далі — «Продукт»).
              </p>
              <p className="mb-4">
                Оформлюючи покупку на сайті, користувач (далі — «Клієнт») погоджується з цими Умовами в повному обсязі.
              </p>
              <p className="mb-4">Власник Продукту:</p>
              <address className="not-italic bg-black/5 rounded-xl p-5 text-black">
                <strong className="font-bold">ТОВ Individualist Agency</strong><br />
                вул. Велика Васильківська, 100, 03150, Київ, Україна<br />
                Email:{" "}
                <a href="mailto:individualistua@gmail.com" className="underline hover:text-black/60">
                  individualistua@gmail.com
                </a><br />
                Тел.:{" "}
                <a href="tel:+48889705849" className="underline hover:text-black/60">
                  +48 889 705 849
                </a>
              </address>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Предмет договору</h2>
              <p className="mb-3">
                Компанія надає Клієнту доступ до цифрового інформаційного продукту у форматі записаного онлайн-воркшопу.
              </p>
              <p className="mb-3">Продукт включає:</p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "відеоматеріали 5-денного воркшопу",
                  "структуровані навчальні блоки",
                  "практичні завдання",
                  "додаткові матеріали (за наявності)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Послуга вважається наданою в момент надання доступу до матеріалів.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Формат доступу</h2>
              <p className="mb-3">Доступ до Продукту надається:</p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "онлайн (через платформу або особистий кабінет / посилання)",
                  "після підтвердження оплати",
                  "у форматі записаних матеріалів",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Клієнт може проходити воркшоп у будь-який зручний час.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Оплата</h2>
              <p className="mb-3">Оплата здійснюється через доступні на сайті платіжні системи.</p>
              <p className="mb-3">Після успішної оплати Клієнт отримує:</p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "підтвердження покупки",
                  "доступ до матеріалів Продукту",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Усі ціни вказані на сайті є кінцевими, якщо не зазначено інше.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Політика повернення</h2>
              <p className="mb-3">
                Оскільки Продукт є цифровим інформаційним товаром, доступ до якого надається одразу після оплати:
              </p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "повернення коштів не передбачене після отримання доступу",
                  "винятки можливі лише у разі технічної помилки з боку Компанії",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Купуючи Продукт, Клієнт погоджується з цими умовами.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Права інтелектуальної власності</h2>
              <p className="mb-3">
                Усі матеріали Продукту є інтелектуальною власністю ТОВ Individualist Agency.
              </p>
              <p className="mb-3">Забороняється без письмової згоди Компанії:</p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "копіювати або поширювати матеріали",
                  "продавати або передавати третім особам",
                  "публікувати у відкритому доступі",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Порушення може призвести до юридичної відповідальності.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Обмеження відповідальності</h2>
              <p className="mb-3">
                Компанія не гарантує конкретних бізнес-результатів після проходження Продукту, оскільки результат залежить від дій Клієнта, ринкових умов та рівня впровадження стратегії. Продукт має освітній та інформаційний характер.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Доступ та технічні умови</h2>
              <p className="mb-3">Клієнт самостійно забезпечує доступ до інтернету та пристрій для перегляду матеріалів. Компанія не несе відповідальності за технічні проблеми на стороні Клієнта.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Комунікація</h2>
              <p className="mb-3">Компанія може надсилати Клієнту:</p>
              <ul className="space-y-1.5 pl-4 mb-3">
                {[
                  "організаційні листи та доступи до матеріалів",
                  "інформаційні та маркетингові повідомлення",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-black mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Клієнт може відмовитися від маркетингових розсилок у будь-який момент.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Персональні дані</h2>
              <p>
                Обробка персональних даних здійснюється відповідно до{" "}
                <a href="/privacy-policy" className="font-semibold text-black underline hover:text-black/60">
                  Політики конфіденційності
                </a>
                , розміщеної на сайті.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Зміни умов</h2>
              <p>Компанія залишає за собою право змінювати ці Умови в будь-який момент. Актуальна версія завжди доступна на цій сторінці.</p>
            </section>

            <section>
              <h2 className="font-black uppercase text-lg text-black mb-3">Заключні положення</h2>
              <p>
                Ці Умови є юридично обов'язковою угодою між Клієнтом та ТОВ Individualist Agency. Усі спори вирішуються шляхом переговорів, а у разі неможливості — відповідно до чинного законодавства України.
              </p>
            </section>

            <section className="border-t border-black/10 pt-8">
              <h2 className="font-black uppercase text-lg text-black mb-3">Контакти</h2>
              <address className="not-italic">
                <strong className="font-bold text-black">ТОВ Individualist Agency</strong><br />
                вул. Велика Васильківська, 100, 03150, Київ, Україна<br />
                Email:{" "}
                <a href="mailto:individualistua@gmail.com" className="underline hover:text-black/60">
                  individualistua@gmail.com
                </a><br />
                Тел.:{" "}
                <a href="tel:+48889705849" className="underline hover:text-black/60">
                  +48 889 705 849
                </a>
              </address>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
