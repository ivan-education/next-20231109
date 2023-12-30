import Header from "@/app/components/header/component";
import "@/app/scss/styles.scss";
import classes from "./styles.module.scss";
import { Footer } from "./components/footer/component";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className={classes.layout}>
            <Header className={classes.layout__header} />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
