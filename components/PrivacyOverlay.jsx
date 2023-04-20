import Heading from "./styles/Heading";
import Text from "./styles/Text";
import Emoji from "react-emoji-render";
import clsx from "clsx";
import PrivacyTopics from "./PrivacyTopics";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Checkbox from "./styles/Checkbox";
import Button from "./styles/Button";

export default function PrivacyOverlay({show, setShow}) {
  const router = useRouter();
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false)
    }

    setOpen(index)
  }

  useEffect(()=> {
    setOpen(1)
  }, [])

  const topics = [
    {
      "title": "🔎  Informações Pessoais Coletadas",
      "text": "Coletamos informações pessoais quando você se registra no nosso aplicativo, faz compras num supermercado ou interage conosco de outras formas. As informações pessoais que coletamos podem incluir seu nome, sexo, endereço, endereço de e-mail, número de telefone e histórico de pedidos, valores, itens e formas de pagamento utilizadas."
    },
    {
      "title": "🙈  Uso de Informações Pessoais",
      "text": "Usamos suas informações pessoais para fornecer e melhorar o nossos serviços de self checkout e dos supermercados que atendemos. Podemos usar suas informações para entrar em contato com você, para enviar promoções e ofertas especiais, e personalizar a sua experiência no aplicativo."
    },
    {
      "title": "🌐  Compartilhamento de Informações Pessoais",
      "text": "Compartilhamos suas informações pessoais apenas com os estabelecimentos que você frequenta, cumprir obrigações legais, ou proteger nossos direitos e propriedade."
    },
    {
      "title": "🔒 Segurança de Informações Pessoais",
      "text": "Temos medidas de segurança em vigor para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação. No entanto, nenhum método de transmissão de dados pela internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não podemos garantir a segurança absoluta das suas informações pessoais."
    },
    {
      "title": "🔄 Alterações na Política de Privacidade",
      "text": "Podemos atualizar esta política de privacidade de tempos em tempos. Se fizermos alterações significativas na forma como coletamos, usamos ou compartilhamos suas informações pessoais, iremos notificá-lo por meio do aplicativo ou por e-mail."
    },
    {
      "title": "📞 Contato",
      "text": "Se tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em contato conosco pelo e-mail contato@scaneasy.com"
    }
  ]
  

  return(
    <div
    className={
      clsx(
        'w-screen',
        'h-screen',
        'absolute',
        'top-0',
        'left-0',
        'flex',
        'flex-col',
        'bg-white',
        'py-10',
        'px-6',
        {
          'hidden': !show
        }
      )
    }
  >
    <div>
      <Heading
        asChild
      >
        <h1
          className='text-center'
        >
          Política de Privacidade
        </h1>
      </Heading>
      <Text
        asChild
      >
        <p
          className='mt-4'
        >
          A Scan Easy é uma empresa que tem uma política de privacidade e termos uso simples e fáceis de entender, sem jargões ou termos muito técnicos, para que você possa entender o que fazemos com seus dados e como os protegemos.
        </p>
      </Text>
      <div
        className="
          w-full
          flex
          flex-col
          gap-8
          mt-8
        "
      >
        {topics.map((topic, index) => (
          <PrivacyTopics
            key={index}
            title={topic.title}
            text={topic.text}
            open={open === index}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
      <div
        className="my-5 mx-1 flex gap-2"
      >
        <Checkbox border/>
        <Text>
          Li e concordo com a Política de Privacidade
        </Text>
      </div>
      <Button
        textSize="xs"
      >
        <div
          onClick={() => router.push('/home')}
        >
          <Emoji text="Continuar" />
        </div>
      </Button>
    </div>
  </div>
  )
}