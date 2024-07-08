import { Container } from "../components/Container";
import ReverseScrollingColumns from "../components/ReverseScrollingColumns";
import { fetchReleases } from "../lib/loaders";
import { ReleaseProps } from "../page";
import { sanityFetch } from "../sanity/client";

export default async function Page() {
  const QUERY = `*[_type=='release']{_id,title,slug,catno,date,genre,style,image,format,artist[]->{
    artistName,slug,image
  }}|order(date desc)`;

  const releases = (await sanityFetch({
    query: QUERY,
  })) as ReleaseProps[];

  return (
    <section className="mt-16">
      <Container>
        <h2>bla bla bla</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta
          consequatur cum laborum in mollitia excepturi sit nemo voluptates
          necessitatibus veritatis amet, rerum quos ipsam ad! Mollitia dolor
          dolorem maxime nihil! Suscipit sint, ex atque eos, repellendus sed,
          officia natus commodi veritatis saepe aperiam cumque! Reiciendis
          adipisci dolor qui aperiam accusamus rerum, ullam earum! Possimus
          ducimus minima nostrum voluptate ad molestias quasi ea quos. Error
          consequatur iste possimus, quis cupiditate provident in aliquid
          officia, praesentium culpa velit, delectus ex eum deserunt iusto
          numquam maxime! Voluptates veritatis reprehenderit laborum corrupti
          eius nesciunt, sunt tempore recusandae tenetur, non eveniet
          perspiciatis quam a.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          alias modi voluptatibus, quam nulla sunt cupiditate deleniti nesciunt
          laudantium vero explicabo tempore? Ex excepturi corporis nemo rerum,
          soluta totam minima ipsam facere, blanditiis quos labore veritatis
          porro quaerat. Sit, numquam repellendus! Minus ducimus alias quibusdam
          consectetur, cupiditate tenetur earum adipisci esse dolor repellat,
          exercitationem tempore odit magni delectus odio rem, unde excepturi
          temporibus doloribus eum minima nobis. Fuga minima officia nemo,
          mollitia cumque doloremque. Laboriosam tenetur molestiae ipsam
          necessitatibus quaerat ipsa nemo atque dolor distinctio voluptas error
          soluta, amet dolores dolorum unde recusandae dignissimos aspernatur
          facere cum dicta doloremque totam vero. Laboriosam optio dolor tempore
          deleniti! Ipsam ipsa nostrum eum similique magni velit. Cumque,
          eligendi omnis exercitationem, itaque fuga illum quae quas alias hic
          et facere ipsum libero ab autem aspernatur pariatur vel nobis. Fugiat,
          tempora id. Ut cumque eligendi provident. Nisi nulla id ducimus quae
          enim delectus odio reprehenderit.
        </p>
        <ReverseScrollingColumns data={releases} />;
      </Container>
    </section>
  );
}
