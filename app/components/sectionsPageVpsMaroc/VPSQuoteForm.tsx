"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  vcpu: string;
  ram: string;
  storage: string;
  useCase: string;
  os: string;
  controlPanel: string;
  managedServices: string;
  backup: string;
}

interface FormErrors {
  [key: string]: string;
}

const VPSQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    vcpu: "",
    ram: "",
    storage: "",
    useCase: "",
    os: "",
    controlPanel: "",
    managedServices: "",
    backup: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "company":
        if (!value.trim()) return "Le nom de l'entreprise est requis";
        if (value.trim().length < 2)
          return "Le nom de l'entreprise doit contenir au moins 2 caractères";
        return "";

      case "phone":
        if (!value.trim()) return "Le numéro de téléphone est requis";
        const phoneRegex = /^(\+212|0)[5-7][0-9]{8}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ""))) {
          return "Veuillez entrer un numéro de téléphone marocain valide";
        }
        return "";

      case "email":
        if (!value.trim()) return "L'email est requis";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Veuillez entrer une adresse email valide";
        return "";

      case "vcpu":
        if (!value.trim()) return "Le nombre de vCPU est requis";
        const vcpuNum = parseInt(value);
        if (isNaN(vcpuNum) || vcpuNum < 1 || vcpuNum > 128) {
          return "Veuillez entrer un nombre de vCPU valide (1-128)";
        }
        return "";

      case "ram":
        if (!value.trim()) return "La RAM est requise";
        if (!/^\d+\s?(GB|Go|MB|Mo)$/i.test(value.trim())) {
          return "Format invalide. Exemple: 4 GB, 8 Go";
        }
        return "";

      case "storage":
        if (!value.trim()) return "Le stockage est requis";
        if (!/^\d+\s?(GB|Go|TB|To|MB|Mo)$/i.test(value.trim())) {
          return "Format invalide. Exemple: 100 GB, 1 TB";
        }
        return "";

      case "os":
        if (!value) return "Veuillez sélectionner un système d'exploitation";
        return "";

      case "controlPanel":
        if (!value) return "Veuillez sélectionner un panneau de contrôle";
        return "";

      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.company = validateField("company", formData.company);
    newErrors.phone = validateField("phone", formData.phone);
    newErrors.email = validateField("email", formData.email);
    newErrors.vcpu = validateField("vcpu", formData.vcpu);
    newErrors.ram = validateField("ram", formData.ram);
    newErrors.storage = validateField("storage", formData.storage);
    newErrors.os = validateField("os", formData.os);
    newErrors.controlPanel = validateField(
      "controlPanel",
      formData.controlPanel
    );

    // Remove empty errors
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector(".border-red-500");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          vcpu: "",
          ram: "",
          storage: "",
          useCase: "",
          os: "",
          controlPanel: "",
          managedServices: "",
          backup: "",
        });
        setTouched({});
        setErrors({});
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses =
      "w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none transition";
    const hasError = touched[fieldName] && errors[fieldName];

    if (hasError) {
      return `${baseClasses} border-red-500 focus:ring-2 focus:ring-red-500`;
    }

    return `${baseClasses} border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent`;
  };

  return (
    <section className="lg:my-[150px] demande-devis my-[80px] bg-gray-100 py-16">
      <div className="container mx-auto px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Demande de devis
              <br />
              Cloud VPS Maroc
            </h2>
            <p className="paragraph text-lg max-w-3xl mx-auto">
              L'équipe Hostino® est à votre écoute : remplissez le formulaire
              ci-dessous et l'un de nos experts vous contactera{" "}
              <strong>dans les 24 heures</strong> pour répondre à toutes vos
              questions.
            </p>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 text-center">
              <p className="font-semibold">
                ✓ Votre demande a été envoyée avec succès !
              </p>
              <p className="text-sm mt-1">
                Nous vous contactons dans les 24 heures.
              </p>
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-[10px]  p-8 md:p-12">
            {/* Name and Company */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Nom et prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses("name")}
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Entreprise <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses("company")}
                  placeholder=""
                />
                {touched.company && errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses("phone")}
                  placeholder="+212 6XX XXX XXX"
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses("email")}
                  placeholder="exemple@entreprise.ma"
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Vos besoins */}
            <div className="mb-8">
              <h3 className="text-title text-xl font-[600] mb-6">
                Vos besoins :
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="vcpu"
                    className="block text-title text-[17] font-medium mb-2"
                  >
                    vCPU <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="vcpu"
                    name="vcpu"
                    value={formData.vcpu}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClasses("vcpu")}
                    placeholder="4"
                  />
                  {touched.vcpu && errors.vcpu && (
                    <p className="text-red-500 text-xs mt-1">{errors.vcpu}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ram"
                    className="block text-title text-[17] font-medium mb-2"
                  >
                    RAM <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ram"
                    name="ram"
                    value={formData.ram}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClasses("ram")}
                    placeholder="8 GB"
                  />
                  {touched.ram && errors.ram && (
                    <p className="text-red-500 text-xs mt-1">{errors.ram}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storage"
                    className="block text-title text-[17] font-medium mb-2"
                  >
                    Stockage <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="storage"
                    name="storage"
                    value={formData.storage}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClasses("storage")}
                    placeholder="100 GB"
                  />
                  {touched.storage && errors.storage && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.storage}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="useCase"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Cas d'utilisation :
                </label>
                <input
                  type="text"
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Ex: Hébergement web, base de données..."
                />
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="mb-8">
              <h3 className="text-title text-xl font-[600] mb-6">
                Informations supplémentaires :
              </h3>

              <div className="mb-6">
                <label
                  htmlFor="os"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Système d'exploitation :{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="os"
                  name="os"
                  value={formData.os}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={
                    getInputClasses("os") + " appearance-none cursor-pointer"
                  }
                >
                  <option value="">Veuillez choisir</option>
                  <option value="linux">
                    Linux (Ubuntu, Debian, CentOS, Almalinux...)
                  </option>
                  <option value="windows">
                    Windows Server (2016,2019,2022)
                  </option>
                </select>
                {touched.os && errors.os && (
                  <p className="text-red-500 text-xs mt-1">{errors.os}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="controlPanel"
                  className="block text-title text-[17] font-medium mb-2"
                >
                  Panneau de contrôle : <span className="text-red-500">*</span>
                </label>
                <select
                  id="controlPanel"
                  name="controlPanel"
                  value={formData.controlPanel}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={
                    getInputClasses("controlPanel") +
                    " appearance-none cursor-pointer"
                  }
                >
                  <option value="">Veuillez choisir</option>
                  <option value="none">Aucun</option>
                  <option value="cpanel">cPanel</option>
                  <option value="plesk">Plesk</option>
                  <option value="other">Autre</option>
                </select>
                {touched.controlPanel && errors.controlPanel && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.controlPanel}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <p className="block text-title text-[17] font-[400] mb-3">
                  Avez-vous besoin d'infogérance ?
                </p>
                <div className="flex gap-8">
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="managedServices"
                      value="yes"
                      checked={formData.managedServices === "yes"}
                      onChange={handleInputChange}
                    />
                    <span className="truncate">Oui</span>
                  </label>
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="managedServices"
                      value="non"
                      checked={formData.managedServices === "non"}
                      onChange={handleInputChange}
                    />
                    <span className="truncate">Non</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <p className="block text-title text-[17] font-[400] mb-3">
                  Avez-vous besoin d'une sauvegarde distante ?
                </p>
                <div className="flex gap-8">
                  <label className="label-radio" >
                    <input
                      type="radio"
                      name="backup"
                      value="yes"
                      checked={formData.backup === "yes"}
                      onChange={handleInputChange}
                    />
                    <span className="truncate">Oui</span>
                  </label>
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="backup"
                      value="non"
                      checked={formData.backup === "non"}
                      onChange={handleInputChange}
                    />
                    <span className="truncate">Non</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`bg-primary hover:bg-primary/90 text-white font-semibold px-[150px] py-2 rounded-full transition duration-300 transform shadow-lg ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>

            {/* Footer Note */}
            <p className="paragraph text-[14px] text-center mt-6 text-gray-600">
              En cliquant sur "Envoyer", vous autorisez Hostino™ à traiter les
              données que vous avez fournies, conformément à sa{" "}
              <a
                href="/politique-de-confidentialite/"
                className="text-green-600 hover:underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPSQuoteForm;
