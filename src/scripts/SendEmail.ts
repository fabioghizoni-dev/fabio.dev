import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: ContactFormData) => {
  const { name, email, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Nova mensagem de contato</h2>
      <p><strong>De:</strong> ${name}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
    </div>
  `;

  try {
    const { data: response, error } = await resend.emails.send({
      from: email,
      to: "dev6solucoes@gmail.com",
      subject: `Novo contato de ${name}`,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw error;
    }

    console.log("Email sent successfully:", response);
    return { ok: true, id: response?.id };
  } catch (err) {
    console.error("sendEmail error:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
};

// Handler para formulário HTML (chamado no lado cliente)
export const handleContactForm = (formElement: HTMLFormElement | null) => {
  if (!formElement) return;

  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = (formElement.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (formElement.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (formElement.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Desabilita o botão durante o envio
    const button = formElement.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    if (button) button.disabled = true;

    try {
      // Chama sendEmail diretamente (precisa rodar em server-side ou via Vercel Function)
      const result = await sendEmail({ name, email, message });

      if (result.ok) {
        alert("Mensagem enviada com sucesso!");
        formElement.reset();
      } else {
        alert(`Erro ao enviar: ${result.error || "Tente novamente"}`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Erro ao enviar a mensagem. Verifique sua conexão.");
    } finally {
      if (button) button.disabled = false;
    }
  });
};