import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formValidationSchema = zod.object({
	name: zod
		.string()
		.trim()
		.min(
			1,
			"Ops! Por favor, insira o seu nome para que possamos entrar em contato corretamente."
		),
	email: zod
		.string()
		.trim()
		.min(
			1,
			"Ops! Parece que você esqueceu de inserir seu e-mail. Por favor, adicione para que possamos entrar em contato."
		)
		.email(
			"Ops! Parece que você adicionou um endereço inválido! Por favor, insira um e-mail válido."
		),
	subject: zod
		.string()
		.trim()
		.min(
			1,
			"Ops! Parece que você esqueceu de preencher o assunto. Por favor, adicione um título para sua mensagem."
		),
	message: zod
		.string()
		.trim()
		.min(
			1,
			"Ops! Parece que você esqueceu de preencher este campo. Por favor, digite sua mensagem."
		),
});

type FormData = zod.infer<typeof formValidationSchema>;

export function ContactForm() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(formValidationSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const message = watch("message");

	const isSubmitDisabled = !message || isSubmitting;

	function showErrorAlerts() {
		if (errors.name) {
			return toast.warn(errors.name.message);
		} else if (errors.email) {
			return toast.warn(errors.email.message);
		} else if (errors.subject) {
			return toast.warn(errors.subject.message);
		} else if (errors.message) {
			return toast.warn(errors.message.message);
		}
	}

	async function handleSendEmail(data: FormData) {
		try {
			const result = await emailjs.send(
				"service_2etnwpk",
				"template_naus2lq",
				{
					name: data.name,
					email: data.email,
					subject: data.subject,
					message: data.message,
				},
				"-bx-ezfkgS7jMm5Um"
			);
			console.log("Email sent successfully:", result.text);
			toast.success(
				"Sua mensagem foi enviada com sucesso! Obrigado por entrar em contato. Em breve, retornarei a você."
			);
			reset();
		} catch (error) {
			// Verifica se o erro possui uma propriedade 'text' e a exibe.
			if (error instanceof Error) {
				console.log("Email sending error:", error.message);
				toast.error(
					"Ops! Houve um contratempo no servidor ao processar sua mensagem. Por favor, tente novamente em alguns segundos."
				);
			} else {
				// Se o erro não for uma instância de Error, apenas exibe o erro como está.
				console.log("Email sending error:", error);
				toast.error(
					"Ops! Houve um contratempo no servidor ao processar sua mensagem. Por favor, tente novamente em alguns segundos."
				);
			}
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSendEmail, showErrorAlerts)}
			className="px-8 xl:px-64">
			<div className="flex flex-col sm:flex-row gap-4 mb-4">
				<Input
					type="text"
					{...register("name")}
					placeholder="Seu nome"
				/>
				<Input
					type="email"
					{...register("email")}
					placeholder="E-mail"
				/>
				<Input
					type="text"
					{...register("subject")}
					placeholder="Assunto"
				/>
			</div>

			<Textarea
				{...register("message")}
				placeholder="Sua mensagem..."
				className="mb-4 w-full h-40 sm:h-48 md:h-56 lg:h-64"
			/>

			<div className="flex justify-end">
				<Button
					type="submit"
					className={`${
						isSubmitDisabled ? "cursor-not-allowed " : ""
					} ${
						isSubmitting ? "bg-green-950 border-none" : ""
					} w-full sm:w-36`}
					disabled={isSubmitDisabled}>
					{isSubmitting ? (
						<div className="flex items-center gap-2">
							<span>Enviando</span>
							<div className="dots">
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					) : (
						"Enviar"
					)}
				</Button>
			</div>
		</form>
	);
}
