<script>
	import {
		AtlButton,
		AtlCheckbox,
		AtlTextInput,
		AtlLabel,
		AtlField,
		AtlTooltip,
		AtlTextArea,
		AtlSelect
	} from '@design-atlas/svelte';

	const icons = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m40-120 440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z"/></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm-40-361h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/></svg>`,
		close: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,
		person: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`
	};

	// Estado inicial do AtlTextArea
	let textAreaStatus = 'default';

	let selected;

	// Função para gerar IDs únicos
	function generateId() {
		return 'atl_' + Math.random().toString(36).substr(2, 9);
	}

	function handleChangeStatus() {
		console.log('Status atual:', textAreaStatus);
		if (textAreaStatus === 'default') textAreaStatus = 'error';
		else if (textAreaStatus === 'error') textAreaStatus = 'success';
		else textAreaStatus = 'default';
		console.log('Novo status:', textAreaStatus);
	}
</script>

<div class="wrapper">
	<div class="container">
		<h1>Design Atlas - Svelte Components Demo</h1>
		<p>
			This is a demo site showcasing the Svelte components from the @design-atlas/svelte package.
		</p>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the SvelteKit documentation
		</p>
		<AtlButton>buton</AtlButton>
		<AtlCheckbox>Checkbox</AtlCheckbox>
		<AtlLabel
			showDescription="true"
			description="description text is massive"
			type="required"
			label="text of the label"
		/>
		<AtlTextInput />
		<AtlField />
		<AtlTooltip direction="top" text="This is a tooltip from top.">
			<AtlButton>Tooltip Button</AtlButton>
		</AtlTooltip>

		<AtlLabel label="Default Text Area" />
		<AtlTextArea />

		<AtlLabel label="Disabled Non-Resizable Text Area" />
		<AtlTextArea disabled={true} resizable={false} />

		<AtlLabel label="Default/Error/Success Non-Resizable Custom and Auto Size Text Area" />
		<AtlTextArea
			status={textAreaStatus}
			resizable={false}
			height={100}
			width={150}
			autosize={true}
		/>
		<AtlButton on:click={handleChangeStatus}>Change Status</AtlButton>
		
		<AtlSelect 
			label="Select" 
			required={true} 
			options={[{"text":"Hello"},{"text":"World"}]} 
			display_func={o => o.text} 
			bind:value={selected} 
			icon={icons.person}
		/>
		
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem;
		align-items: start;
	}
</style>
